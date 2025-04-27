export class Constants {
  public static TITLE_INFO = 'INFO!';
  public static TITLE_ERROR = 'ERROR!';
  public static TITLE_WARNING = 'WARNING!';
  public static TITLE_SUCCESS = 'SUCCESS!';
  public static TITLE_OFFLINE = 'IS OFFLINE!';

  static Auth = class {
    public static USER_KEY = 'user';
    public static ENV_KEY = 'environment';
  };

  static Storager = class {
    public static USER_KEY = 'user';
    public static MESSAGE: string = 'message';
  };

  static Routing = class {
    public static LOGIN = {
      label: 'Login',
      path: 'login',
      routerLink: ['/login'],
    };
    public static NOT_FOUND = {
      label: 'Not Found',
      path: 'not-found',
      routerLink: ['/not-found'],
    };
  };

}
