<template>
    <button class="btn">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'my-button'
  }
  </script>
  
  <style scoped>
  .btn{
	align-items: center;
  text-align: center;
	margin: 20px 0;
	background: #506773;
	border: 5px solid #506773;
	border-radius: 5px;
	width: 100%;
  height: 130px;
  color: #fff;
  font-weight: 400;
	font-size: 42px;
	line-height: 50px;
  
}
.btn:hover{
	border: 5px solid #66FF75;
}
.btn:active{
  background: #41555F;
}
  </style>