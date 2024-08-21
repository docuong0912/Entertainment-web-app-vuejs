import APIService from './base-api'

export default class FakeAPI {
  static async getData() {
    return await fetch('./data.json')
  }
}
