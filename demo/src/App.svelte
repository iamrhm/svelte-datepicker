<script>
  import Calender from '@packages/svelte-calendar';
</script>

<div class="calendar-container">
  <Calender />
</div>


<style>
  .calendar-container {
    width: 50%;
    min-width: 240px;
  }
  .calendar-container :global(*) {
    fill: #fff;
  }
</style>
