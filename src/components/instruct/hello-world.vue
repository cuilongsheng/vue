<template>
    <div class="helloWorld">
        <h1>{{message}}</h1>
    </div>
</template>
<script>
export default {
  name: "helloWorld",
  data() {
    return { 
        message: "Hello world!" 
    };
  }
};
</script>
