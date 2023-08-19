<script>
  import DaysView from "./components/DaysView.svelte";
  import MonthView from "./components/MonthView.svelte";

  $:calendarViewType = 'days-view';
  $:currDate = new Date();

  function changeCalendarView(type = 'days-view') {
    calendarViewType = type;
  }
  function updateDate(newDate) {
    currDate = newDate;
  }
</script>

<div class="calendar-container">
  {#if (calendarViewType === 'days-view')}
    <DaysView
      currDate={currDate}
      changeCalendarView={() => changeCalendarView('month-view')}
      updateDate={updateDate}
    />
    {:else if (calendarViewType === 'month-view')}
      <MonthView
        currYear={currDate.getFullYear()}
        changeCalendarView={() => changeCalendarView('days-view')}
        updateDate={updateDate}
      />
  {/if}
</div>

<style>
  .calendar-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>