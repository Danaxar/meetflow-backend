export enum RabbitMQ {
  UserQueue = 'users',
  GuestQueue = 'guests',
  ProjectQueue = 'projects',
  MeetingQueue = 'meetings'
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  VALID_USER = 'VALID_USER',
}

export enum GuestMSG {
  CREATE = 'CREATE_GUEST',
  FIND_ALL = 'FIND_GUESTS',
  FIND_ONE = 'FIND_GUEST',
  UPDATE = 'UPDATE_GUEST',
  DELETE = 'DELETE_GUEST',
}

export enum ProjectMSG {
  CREATE = 'CREATE_PROJECT',
  FIND_ALL = 'FIND_PROJECTS',
  FIND_ONE = 'FIND_PROJECT',
  UPDATE = 'UPDATE_PROJECT',
  DELETE = 'DELETE_PROJECT',
  ADD_GUEST = 'ADD_GUEST',
}

export enum MeetingMSG {
  CREATE = 'CREATE_MEETING',
  FIND_ALL = 'FIND_MEETINGS',
  FIND_ONE = 'FIND_MEETING',
  UPDATE = 'UPDATE_MEETING',
  DELETE = 'DELETE_MEETING',
  ADD_PROJECT = 'ADD_PROJECT',
  FIND_BY_PROJECT = 'FIND_BY_PROYECT'
}
