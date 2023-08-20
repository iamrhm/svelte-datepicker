<script>
  import MonthView from "./components/MonthView.svelte";
  import YearView from "./components/YearView.svelte";

  export let selectedDate = (d) => {};
  export let showYearView = true;

  $:calendarViewType = 'month-view';
  $:currDate = new Date();

  function changeCalendarView(type = 'month-view') {
    calendarViewType = type;
  }
  function updateDate(newDate) {
    currDate = newDate;
  }
  function selectCalendarDate(newDate) {
    selectedDate(newDate);
    console.log("selectCalendarDate", newDate);
  }
</script>

<div class="calendar-container">
  <div class="calendar-wrapper">
    {#if (calendarViewType === 'month-view')}
      <MonthView
        currDate={currDate}
        changeCalendarView={() => showYearView ? changeCalendarView('year-view') : {}}
        updateDate={updateDate}
        selectCalendarDate={selectCalendarDate}
      />
      {:else if (calendarViewType === 'year-view')}
        <YearView
          currYear={currDate.getFullYear()}
          changeCalendarView={() => changeCalendarView('month-view')}
          updateDate={updateDate}
        />
    {/if}
  </div>
</div>

<style>
  .calendar-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .calendar-wrapper {
    width: 100%;
    height: 100%;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
  }
</style>