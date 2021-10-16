<template>
  <div class="login">
    <h1>{{ message }}</h1>
    <label>
      ID
      <input type="text" />
    </label>
    <label>
      Password
      <input type="password" />
    </label>
    <input type="submit" value="login" />
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      message: "Login Page"
    };
  }
};
</script>

<style scoped></style>
