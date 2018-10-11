<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
  };
</script>

<style>
  html {
    margin: 0;
    padding: 0;
    height: 100vh;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #F5F5F5;
  }
  
  *,
  ::after,
  ::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent
  }
  
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #333;
    font-family: 'Helvetica Neue', Tahoma, Arial, PingFangSC-Regular, 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
    line-height: 1.2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    text-size-adjust: none
  }
  
  body,
  button,
  dd,
  dl,
  ol,
  ul {
    margin: 0;
    padding: 0
  }
  
  ol,
  ul {
    list-style: none
  }
  
  a {
    outline: 0;
    color: inherit;
    text-decoration: none
  }
  
  a,
  img {
    -webkit-touch-callout: none
  }
  
  button,
  input,
  select,
  textarea {
    outline: 0;
    border: none;
    font-size: inherit;
    font-family: inherit
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font-weight: 400
  }
  
  img {
    max-width: 100%
  }
  
  textarea {
    resize: none
  }
  
  select {
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
  }
  
  input[type=button],
  input[type=reset],
  input[type=submit] {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button
  }
  
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #fff inset;
    box-shadow: 0 0 0 100px #fff inset
  }
  
  .shellAnimation {
    -webkit-animation: shellPulse 1s infinite;
    animation: shellPulse 1s infinite
  }
  
  img {
    width: 100%;
    height: auto;
    vertical-align: top;
    content: normal !important;
  }
  
  [aspectratio] {
    position: relative;
  }
  
  [aspectratio]::before {
    content: '';
    display: block;
    width: 1px;
    margin-left: -1px;
    height: 0;
  }
  
  [aspectratio-content] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  
  [flexContainer] {
    display: flex;
    width: 750px;
  }
  
  .block {
    margin-top: 15px;
  }
  
  ul,
  li {
    list-style: none outside none;
    margin: 0;
    padding: 0;
  }
  
  figure {
    display: block;
    margin: 0;
  }
</style>
