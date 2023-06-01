import axios from 'axios';

const issuesApi = axios.create({
  baseURL: 'http://issuetrackerwazowski-env.eba-4em2umit.eu-west-3.elasticbeanstalk.com/api/v1'
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
export function getIssueDetailed(issue_id) {
  return issuesApi.get(`/issues/${issue_id}`)
}

export function getAttachments(issue_id) {
  return issuesApi.get(`issues/${issue_id}/attachments`)
}

export function getActivities(issue_id) {
  return issuesApi.get(`issues/${issue_id}/activities`)
}

export function getComments(issue_id) {
  return issuesApi.get(`issues/${issue_id}/comments`)
}

export function getIssuesFiltered(status, priority, assignedTo, unassigned, createdBy, searchword, orderBy) {
  let apiUrl = '/issues?';

  if (status) {
    apiUrl += `status=${status}&`;
  }
  if (priority) {
    apiUrl += `priority=${priority}&`;
  }
  if (assignedTo) {
    apiUrl += `assigned_to=${assignedTo}&`;
  }
  if (createdBy) {
    apiUrl += `created_by=${createdBy}&`;
  }
  if (searchword) {
    apiUrl += `q=${searchword}&`;
  }
  if (orderBy) {
    apiUrl += `order_by=${orderBy}&`;
  }
  if (unassigned) {
    apiUrl += `unassigned=True&`;
  }
  return issuesApi.get(apiUrl);
}

export function addIssue(issueData) {
  const headers = {
    Authorization: 'Bearer 123456789',
  };

  const requestBody = {
    subject: issueData.subject,
    description: issueData.description,
    status: issueData.status,
  };

  return issuesApi.post('/issues', requestBody, { headers });
}

export function bulkInsertIssues(data) {
  return issuesApi.post('/issues/bulkinsert', data, {
    headers: {
      Authorization: 'Bearer 123456789',
    },
  });
}

export function uploadAttachment(issueId, attachmentFile) {
  const formData = new FormData();
  formData.append('file', attachmentFile);
  console.log(typeof attachmentFile)

  const headers = {
    Authorization: 'Bearer 123456789',
    'Content-Type': 'multipart/form-data',
  };

  return issuesApi.post(`issues/${issueId}/attachments`, formData, { headers });
}