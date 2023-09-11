<script>
  import DatePicker from "@packages/svelte-datepicker";

  $:showDatePicker = false;
  $:startDate = new Date();
  $:inputDate = startDate.toLocaleDateString();

  function toggleDatePicker() {
    showDatePicker = !showDatePicker;
  }
  function onChange(date) {
    startDate = date;
    inputDate = (new Date(date)).toLocaleDateString();
    toggleDatePicker();
  }
</script>

<div class="calendar-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="input-wrapper pointer" on:click={toggleDatePicker}>
    <input type="text" class="date-input" bind:value={inputDate} on:click={toggleDatePicker} disabled />
    <span class="calendar-icon">
      🗓️
    </span>
  </div>
    <div class="date-picker-container">
      <div class="relative">
        {#if (showDatePicker)}
          <DatePicker
            startDate={startDate}
            onChange={onChange}
          />
        {/if}
      </div>
    </div>
</div>


<style>
  .calendar-container {
    width: 30%;
    min-width: 240px;
    padding-top: 124px;
    position: relative;
  }
  .calendar-container :global(*) {
    fill: #fff;
  }
  .date-picker-container {
    position: absolute;
    margin-top: 14px;
  }
  .relative {
    position: relative;
  }
</style>
