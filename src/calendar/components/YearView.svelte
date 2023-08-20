<script>
  import { months } from '../utils';
  import MonthView from './MonthView.svelte';

  /* passed props */
  export let currYear;
  export let changeCalendarView;
  export let updateDate;

  $:showYear = currYear;

  function previousYear() {
    showYear = showYear - 1;
  }

  function nextYear() {
    showYear = showYear + 1;
  }
</script>

<div>
  <div class="calendar-header">
    <button class="action-button" on:click={previousYear}>
      Prev
    </button>
    <div
      class="year-header-block"
    >
      {showYear}
    </div>
    <button class="action-button" on:click={nextYear}>
      Next
    </button>
  </div>
  <div class="year-view">
    {#each months as month, i}
      <div class="month-view">
        <MonthView
          currDate={new Date(showYear, i, 1)}
          changeCalendarView={changeCalendarView}
          updateDate={updateDate}
          size='small-view'
        />
      </div>
    {/each}
  </div>
</div>

<style>
  .calendar-header {
    display: flex;
    padding: 16px 8px;
    justify-content: space-between;
    align-items: center;
  }
  .year-view {
    display: flex;
    flex-wrap: wrap;
  }
  .month-view {
    width: 100%;
    padding: 14px 0px;
  }
  .year-header-block,
  .action-button {
    padding: 12px 14px;
    cursor: pointer;
    border-radius: 4px;
  }
  .year-header-block {
    outline: none;
    background-color: transparent;
    font-weight: 800;
    font-size: 18px;
  }
  .action-button {
    padding: 10px 16px;
    border: 1px solid transparent;
    border-color: rgba(153 153 153/ 0.6);
    transition: border-color 0.25s;
    font-size: 12px;
    outline: none;
  }
  @media (min-width: 992px) {
    .month-view {
      width: calc(100% / 3);
      padding: 12px 24px;
    }
    .calendar-header {
      padding: 16px;
    }
    .year-header-block {
      font-size: 24px;
    }
  }
</style>