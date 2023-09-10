<script>
  import DayView from "./calendar/components/DayView.svelte";
  import MonthView from "./calendar/components/MonthView.svelte";
  import YearView from "./calendar/components/YearView.svelte";

  export let selectedDate = (d) => {};

  /* reactive derived values */
  $:calendarViewType = 'day-view';
  $:currDate = new Date();

  function changeCalendarView(type = 'day-view') {
    calendarViewType = type;
  }
  function updateDate(newDate) {
    currDate = newDate;
  }
  function selectCalendarDate(newDate) {
    selectedDate(newDate);
  }
</script>


<div class="calendar-wrapper">
  {#if (calendarViewType === 'day-view')}
    <DayView
      currDate={currDate}
      changeCalendarView={changeCalendarView}
      updateDate={updateDate}
      selectCalendarDate={selectCalendarDate}
    />
    {:else if (calendarViewType === 'month-view')}
      <MonthView
        currDate={currDate}
        changeCalendarView={changeCalendarView}
        updateDate={updateDate}
      />
    {:else if (calendarViewType === 'year-view')}
      <YearView
        currDate={currDate}
        changeCalendarView={changeCalendarView}
        updateDate={updateDate}
      />
  {/if}
</div>


<style>
  .calendar-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 31%) 0px 5px 15px 0px;
    min-width: 240px;
    max-width: 624px;
  }
  :global(.calendar-header) {
    display: flex;
    padding: 1.14em 0.85em;
    justify-content: space-between;
    align-items: center;
  }
  :global(.block) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.1em 1.2em;
    font-size: 0.7em;
    font-weight: 500;
    transition: border-color 0.25s;
    flex-grow: 0;
    flex-shrink: 0;
  }
  :global(.action-button){
    padding: 0.6em;
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
  }
  :global(.action-button:hover){
    border-color: rgb(153 153 153);
  }
  :global(.action-button:focus),
  :global(.action-button:focus-visible){
    outline: none;
  }
  :global(.action-button > svg){
    fill: #fff;
  }
  :global(.pointer) {
    cursor: pointer;
  }
</style>