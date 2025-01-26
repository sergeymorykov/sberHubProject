export enum ErrorPageCode {
  NOT_FOUND = 404,
  SERVER_ERROR = 500
}

export interface ErrorPageProps {
  errorCode?: ErrorPageCode;
  errorTitle?: string;
  errorInfo?: string;
}
