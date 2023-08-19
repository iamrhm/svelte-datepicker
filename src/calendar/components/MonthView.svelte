<script>
  import { months } from '../utils';

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
  function handleChange(month) {
    updateDate(new Date(showYear, month, 1));
    changeCalendarView('days-view');
  }

</script>

<div class="calendar-wrapper">
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
  <div class="month-days">
    {#each months as month, i}
        <button
          class="block"
          on:click={() => handleChange(i)}
        >
          {month}
        </button>
        {#if (i + 1) % 3 === 0}
          <br />
        {/if}
    {/each}
  </div>
</div>

<style>
  .calendar-wrapper {
    width: 70%;
    height: 95%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    max-width: 824px;
    min-width: 280px;
  }
  .calendar-header {
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
  }
  .month-days {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .block {
    display: flex;
    padding: 12px 14px;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    transition: border-color 0.25s;
    width: calc((100% / 4) - 16px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    margin: 12px 8px;
    border-radius: 4px;
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
    font-size: 24px;
  }
  .action-button {
    padding: 10px 16px;
    border: 1px solid transparent;
    border-color: rgba(153 153 153/ 0.6);
    transition: border-color 0.25s;
    font-size: 12px;
    outline: none;
  }
  .block:hover {
    border-color: rgb(153 153 153);
  }
  .block:focus,
  .block:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>