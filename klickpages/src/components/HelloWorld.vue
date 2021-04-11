<template>
  <div class="container">
    <div class="side-bar">
      <div class="body">
        <header>
          <h1>Selecione o seu tipo de card: </h1>
        </header>
        <div class="card">
          <span><font-awesome-icon icon="user-secret" /></span>
          <p>Retangular</p>
        </div>
        <div class="card">
          <span>[]</span>
          <p>Retrato</p>
        </div>
        <div class="card">
          <span>[]</span>
          <p>Hexágono</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: gray;
}

header {
  padding: 24px;
}

.side-bar {
  background-color: rgba(96, 96, 96, 0.05);
  width: 25%;
  height: 100vh;
}

.container {
  max-width: 100%;
  width: 100vw;
}

.body {
  margin: 0;
  padding: 32px;
  text-align: center;
}

.card {
    background-color: white;
    width: 25%;
    margin: 15px auto;
    height: 4.5em;
    padding: 30px;
    text-align: center;
    box-shadow: gray;
    box-shadow: 0 0 1em lightgrey;
    border-radius: 10px;
    cursor: pointer;
  }

  .card:hover {
    box-shadow: 0 0 1em rgba(0, 181, 204, 0.25);
  }

  .card:active {
    background-color: rgba(0, 181, 204, 0.4);
    outline: none;
    background-size: 100%;
    transition: background 1s;
  }
</style>
