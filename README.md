**redux**をすっきり書ける**redux toolkit**を触った。<br />
んでアウトプットに**匿名チャット**を作った。

**firebase authentication**を使って**匿名ログイン**。<br />
**firestore**の**onSnapshot**でデータベースの**変更を検知して**<br />
**新しいチャットデータを反映させる**方式です。

**websocket**も**ポーリング**も使ってないです。

## 成果物
https://qiita-chat.netlify.app

## リポジトリ
https://github.com/yuzuru2/qiita-chat

## firestore セキュリティルール
```javascript
rules_version = '2';
service cloud.firestore {
  function isAuthenticated() {
    return request.auth != null;
  }

  function isValidBoardSchema(board) {
    return board.size() == 4
      && 'uid' in board && board.uid is string
      && 'message' in board && board.message is string
      && 'createdAt' in board && board.createdAt is timestamp
      && 'updatedAt' in board && board.updatedAt is timestamp
  }
  
  function isValidBoardData(board) {
    return 1 <= board.message.size() && board.message.size() <= 150
  }
  
  match /databases/{database}/documents {
    match /boards/{boardId} {
      allow list: if request.query.limit <= 100;
    }
    
    match /boards/{boardId} {
      allow create: if isAuthenticated() && request.resource.data.uid == request.auth.uid && isValidBoardSchema(request.resource.data) && isValidBoardData(request.resource.data);
    }
  }
}
```

|  物理名  |  論理名  |  型  | 備考  |
| ---- | ---- | ---- | ---- | 
|  uid  |  名前  |  string  | 必須  |
|  message  |  メッセージ  |  string  | 必須・150文字以内  |
|  createdAt  |  作成時間  |  Date  | 必須・timestamp  |
|  updatedAt  |  更新時間  |  Date  | 必須・timestamp  |

**uid**は**firebase authentication**で得る**uid**

## 画面
![無題.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/604197/f4f1e20e-40a8-81dd-9f7c-4e6c0d1beb6c.png)
