<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header"> </slot>
          <button type="button" class="btn-close" @click="close">X</button>
        </header>

        <section class="modal-body">
          <slot name="body"> </slot>
        </section>

        <footer class="modal-footer">
          <!--  <slot name="footer"> This is the default footer2! </slot> -->
          <!--  <button type="button" class="btn-green" @click="close">
          Close Modal
        </button> -->
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
module.exports = {
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.modal {
  background: #181818;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  max-width: 40%;
  width: 100%;
  min-height: 50vh;
  border-radius: 10px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  /*  border-top: 1px solid #eeeeee; */
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  top: 0;

  flex: 1;
}

.btn-close {
  position: fixed;
  top: 0;
  right: 0px;
  border: none;
  font-size: 20px;
  padding: 0;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
  z-index: 2;
  max-width: 50%;
  width: 0;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

@media (max-width: 650px) {
  .modal {
    max-width: 95%;
  }
}
</style>
