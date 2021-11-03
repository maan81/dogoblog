<template>
  <div class="spin"></div>
</template>
<script></script>
<style>
  .spin{
    display: block;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: #ff8800;

    /* rotation for loading spinner */
    animation: spin 1s ease infinite;
  }

  /* rotation for loading spinner */
  @keyframes spin{
    to{transform: rotateZ(360deg)}
  }
</style>
