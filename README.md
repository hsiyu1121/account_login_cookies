# 簡易版登入器_cookie

使用cookie方式保留使用者資訊

使用 Node.js, Express, Express-handlebars 套件製作而成

![Alt text](https://github.com/hsiyu1121/account_login_cookies/blob/master/account_login_cookies.png)

## 功能清單
* 使用者可輸入帳號密碼並提交
* 帳密錯誤，使用者可以得到提示訊息，並且保留原本輸入帳號密碼
* 帳密正確，使用者將跳轉至歡迎畫面
* 登入成功後，使用者會一直處於登入狀態
* 如需登出，導航列右邊登出即可

## 環境需求
* Node.js: v10.15.0
* express: v4.17.1
* express-handlebars: v5.1.0
* body-parser: v1.19.0

## 啟動方式
* 將專案下載至本機內

  ``git clone https://github.com/hsiyu1121/account_login_cookies.git``
* 切換至資料夾內

  ``cd account_login_cookie``
* 安裝相關的套件

  ``npm install``
* 執行程式

  ``npm run start``
* 透過nodemon執行程式

  ``npm run dev``
* 開啟瀏覽器輸入以下網址

  ``http://localhost:3000``

## 測試帳號密碼清單
<table>
  <tr>
    <td></td>
    <td>Name</td>
    <td>Email</td>
    <td>Password</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Tony</td>
    <td>tony@stark.com</td>
    <td>iamironman</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Steve</td>
    <td>captain@hotmail.com</td>
    <td>icandothisallday</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Peter</td>
    <td>peter@parker.com</td>
    <td>enajyram</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Natasha</td>
    <td>natasha@gamil.com</td>
    <td>*parol#@$!</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Nick</td>
    <td>nick@shield.com</td>
    <td>password</td>
  </tr>
</table>
