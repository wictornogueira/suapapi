import axios from 'axios'

export default class SUAP {
  static baseURL : string = 'https://suap.ifrn.edu.br:443/api/v2/'

  token: string = ''

  static auth (username: string, password: string): Promise<string> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'POST',
        baseURL: this.baseURL,
        url: 'autenticacao/token/',
        params: { format: 'json' },
        data: {
          username,
          password
        }
      })
        .then((response) => { resolve(response.data.token) })
        .catch((error) => { reject(error) })
    })
  }

  static autenticar (username: string, password: string): Promise<string> {
    return this.auth(username, password)
  }

  auth (username: string, password: string): Promise<string> {
    return SUAP.auth(username, password)
      .then((token: string) => { return this.token = token })
  }

  autenticar (username: string, password: string): Promise<string> {
    return this.auth(username, password)
  }


  static getData (token: string): Promise<object> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'GET',
        baseURL: this.baseURL,
        url: 'minhas-informacoes/meus-dados/',
        params: { format: 'json' },
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then((response) => { resolve(response.data) })
        .catch((error) => { reject(error) })
    })
  }

  static getDados (token: string): Promise<object> {
    return this.getData(token)
  }

  getData (): Promise<object> {
    return SUAP.getData(this.token)
  }

  getDados (): Promise<object> {
    return this.getData()
  }

  static getProcesses (token: string): Promise<object> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'GET',
        baseURL: this.baseURL,
        url: 'minhas-informacoes/meus-processos/',
        params: { format: 'json' },
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then((response) => { resolve(response.data) })
        .catch((error) => { reject(error) })
    })
  }

  static getProcessos (token: string): Promise<object> {
    return this.getProcesses(token)
  }

  getProcesses (): Promise<object> {
    return SUAP.getProcesses(this.token)
  }

  getProcessos (): Promise<object> {
    return this.getProcesses()
  }

  static getProcess (token: string, id: number): Promise<object> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'GET',
        baseURL: this.baseURL,
        url: `minhas-informacoes/meus-processos/${id}`,
        params: { format: 'json' },
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then((response) => { resolve(response.data) })
        .catch((error) => { reject(error) })
    })
  }

  static getProcesso (token: string, id: number): Promise<object> {
    return this.getProcess(token, id)
  }

  getProcess (id: number): Promise<object> {
    return SUAP.getProcess(this.token, id)
  }

  getProcesso (id: number): Promise<object> {
    return this.getProcess(id)
  }

  static getPeriods (token: string): Promise<object> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'GET',
        baseURL: this.baseURL,
        url: 'minhas-informacoes/meus-periodos-letivos/',
        params: { format: 'json' },
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then((response) => { resolve(response.data) })
        .catch((error) => { reject(error) })
    })
  }

  static getPeriodos (token: string): Promise<object> {
    return this.getPeriods(token)
  }

  getPeriods (): Promise<object> {
    return SUAP.getPeriods(this.token)
  }

  getPeriodos (): Promise<object> {
    return this.getPeriods()
  }

  static getReport (token: string, grade: number, period: number = 1): Promise<object> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'GET',
        baseURL: this.baseURL,
        url: `minhas-informacoes/boletim/${grade}/${period}`,
        params: { format: 'json' },
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then((response) => { resolve(response.data) })
        .catch((error) => { reject(error) })
    })
  }

  static getBoletim (token: string, grade: number, period: number = 1): Promise<object> {
    return this.getReport(token, grade, period)
  }

  getReport (grade: number, period: number = 1): Promise<object> {
    return SUAP.getReport(this.token, grade, period)
  }

  getBoletim (grade: number, period: number = 1): Promise<object> {
    return this.getReport(grade, period)
  }

  static getClasses (token: string, grade: number, period: number = 1): Promise<object> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'GET',
        baseURL: this.baseURL,
        url: `minhas-informacoes/turmas-virtuais/${grade}/${period}`,
        params: { format: 'json' },
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then((response) => { resolve(response.data) })
        .catch((error) => { reject(error) })
    })
  }

  static getTurmas (token: string, grade: number, period: number = 1): Promise<object> {
    return this.getClasses(token, grade, period)
  }

  getClasses (grade: number, period: number = 1): Promise<object> {
    return SUAP.getClasses(this.token, grade, period)
  }

  getTurmas (grade: number, period: number = 1): Promise<object> {
    return this.getClasses(grade, period)
  }

  static getClass (token: string, id: number): Promise<object> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'GET',
        baseURL: this.baseURL,
        url: `minhas-informacoes/turma-virtual/${id}`,
        params: { format: 'json' },
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then((response) => { resolve(response.data) })
        .catch((error) => { reject(error) })
    })
  }

  static getTurma (token: string, id: number): Promise<object> {
    return this.getClass(token, id)
  }

  getClass (id: number): Promise<object> {
    return SUAP.getClass(this.token, id)
  }

  getTurma (id: number): Promise<object> {
    return this.getClass(id)
  }

  static getRecordBook (token: string, grade: number, period: number = 1): Promise<object> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'GET',
        baseURL: this.baseURL,
        url: `minhas-informacoes/meus-diarios/${grade}/${period}`,
        params: { format: 'json' },
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then((response) => { resolve(response.data) })
        .catch((error) => { reject(error) })
    })
  }

  static getDiario (token: string, grade: number, period: number = 1): Promise<object> {
    return this.getRecordBook(token, grade, period)
  }

  getRecordBook (grade: number, period: number = 1): Promise<object> {
    return SUAP.getRecordBook(this.token, grade, period)
  }

  getDiario (grade: number, period: number = 1): Promise<object> {
    return this.getRecordBook(grade, period)
  }

  static getAttendances (token: string): Promise<object> {
    return new Promise((resolve: any, reject: any) => {
      axios({
        method: 'GET',
        baseURL: this.baseURL,
        url: 'minhas-informacoes/minhas-frequencias/',
        params: { format: 'json' },
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then((response) => { resolve(response.data) })
        .catch((error) => { reject(error) })
    })
  }

  static getFrequencias (token: string): Promise<object> {
    return this.getAttendances(token)
  }

  getAttendances (): Promise<object> {
    return SUAP.getAttendances(this.token)
  }

  getFrequencias (): Promise<object> {
    return this.getAttendances()
  }
}
