'use strict';

const superagent = require('superagent');
const users = require('../users');

/*
  Resources
  https://developer.github.com/apps/building-oauth-apps/
*/

const tokenServerUrl = 'https://github.com/login/oauth/access_token'; 
const remoteAPI = 'https://api.github.com/user';

const API_SERVER = 'http://localhost:3000/oauth';
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

module.exports = async function authorize(req, res, next) {

  try {
    let code = req.query.code;
    console.log('(1) CODE:', code);


    let remoteToken = await exchangeCodeForToken(code);
    console.log('(2) ACCESS TOKEN:', remoteToken);

    let remoteUser = await getRemoteUserInfo(remoteToken);
    console.log('(3) GITHUB USER', remoteUser);

    let [user, token] = await getUser(remoteUser);
    req.user = user;
    req.token = token;
    console.log('(4) LOCAL USER', user);

    next();
  } catch (e) { next(`ERROR: ${e.message}`) };

};

async function exchangeCodeForToken(code) {

  let tokenResponse = await superagent.post(tokenServerUrl).send({
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: API_SERVER,
    grant_type: 'authorization_code',
  });

//   Error Code: invalid_client
//   Error Message: Unknown client_id.

  let access_token = await tokenResponse.body.access_token;

  return access_token;

}

async function getRemoteUserInfo(token) {

  let userResponse =
    await superagent.get(remoteAPI)
      .set('user-agent', 'express-app')
      .set('Authorization', `token ${token}`);

  let user = userResponse.body;

  return user;

}

async function getUser(remoteUser) {
  let userRecord = {
    username: remoteUser.login,
    // password: 'oauthpassword'
    password: process.env.GITHUB_PASSWORD, // Placeholder for now
  };

  let user = await users.save(userRecord);
  let token = users.generateToken(user);

  return [user, token];

}