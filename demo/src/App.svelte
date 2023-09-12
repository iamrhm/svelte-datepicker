<script>
  import DatePicker from "@mittirorg/svelte-datepicker";
  const initialView = 'month';

  $:showDatePicker = false;
  $:selectedDate = new Date();
  $:currentView = initialView;

  function toggleDatePicker() {
    showDatePicker = !showDatePicker;
  }
  function onChange(date) {
    if (currentView === initialView) {
      selectedDate = date;
      toggleDatePicker();
    }
  }
  function onViewChange(view) {
    currentView = view;
  }
</script>

<div class="calendar-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="input-wrapper pointer" on:click={toggleDatePicker}>
    <span class="calendar-icon">
      🗓️
    </span>
    {selectedDate.toDateString()}
  </div>
  <div class="date-picker-container">
    <div class="relative">
      {#if (showDatePicker)}
        <DatePicker
          startDate={selectedDate}
          defaultView={initialView}
          onChange={onChange}
          onViewChange={onViewChange}
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
  .input-wrapper {
    padding: 16px;
    border: 1px solid transparent;
    border-color: rgba(153 153 153/ 0.6);
    transition: border-color 0.25s;
    outline: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(55, 65, 81);
    color: rgba(255, 255, 255);
    cursor: pointer;
    max-width: 240px;
    margin: auto;
  }
  :global(.input-wrapper:hover){
    border-color: rgb(153 153 153);
  }
  :global(.input-wrapper:focus),
  :global(.input-wrapper:focus-visible){
    outline: none;
  }
  .calendar-icon {
    margin-right: 12px;
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
