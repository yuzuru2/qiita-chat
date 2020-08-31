export default interface reducer {
  basic: {
    loading: boolean;
  };

  messageList: {
    list: {
      uid: string;
      message: string;
      createdAt: {
        seconds: number;
      };
    }[];
  };

  post: {
    message: string;
  };
}
