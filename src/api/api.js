import api from './index'
const version = 'api/v1'

// 提交项目表单
export const postProgram = (data) => {
  return api.post(version + '/program', data)
}
export const getUsers = () => {
  return api.get(version + '/user')
}
export const getProgramList = (campaignID) => {
  return api.get(version + '/campaign/' + campaignID)
}
