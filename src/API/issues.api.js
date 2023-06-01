import axios from 'axios';

const issuesApi = axios.create({
  baseURL: 'http://issuetrackerwazowski-env.eba-4em2umit.eu-west-3.elasticbeanstalk.com/api/v1/'
})

export const getAllIssues = () => {
  return issuesApi.get('/issues');
}

export const getAllUsers = () => {
  return issuesApi.get('/users');
}

export const getUser = (id) => {
  return issuesApi.get(`/users/${id}`);
}

export const getUserActivities = (id) => {
  return issuesApi.get(`/users/${id}/activities`);
}

export const getUserDetail = (id) => {
  return issuesApi.get(`/users/${id}/issues_watched`);
}

export const postEditProfile = (id, data) => {
  const requestData = {}
  if(data.new_bio) {
    requestData.new_bio = data.new_bio;
  }
  if(data.new_profile_picture) {
    requestData.new_profile_picture = data.new_profile_picture;
  }
  return issuesApi.put(`/users/${id}`, requestData)
}