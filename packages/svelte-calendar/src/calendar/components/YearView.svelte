<script>
  import { getYearRange } from '../utils';
  import NextIcon from './Icons/NextIcon.svelte';
  import PrevIcon from './Icons/PrevIcon.svelte';

  /* passed props */
  export let currDate;
  export let changeCalendarView;
  export let updateDate;

  /* reactive derived values */
  $:showYear = (currDate || new Date()).getFullYear();
  $:({
    startYear,
    endYear,
    years,
  } = getYearRange(showYear));

  function selectedYear(selectedYear) {
    const selectedDate = new Date(selectedYear, 1, 1);
    updateDate(selectedDate);
    changeCalendarView('month-view');
  }
  function previousYear() {
    showYear = startYear - 1;
  }
  function nextYear() {
    showYear = endYear + 1;
  }

</script>

<div class="year-calendar-wrapper">
  <!-- Monthly calendar header  -->
  <div class="calendar-header">
    <button class="action-button" on:click={previousYear}>
      <PrevIcon />
    </button>
    <button
      class="action-button year-indicator"
      on:click={() => changeCalendarView('year-view')}
    >
      {startYear} - {endYear}
    </button>
    <button class="action-button" on:click={nextYear}>
      <NextIcon />
    </button>
  </div>
  <!-- Month container -->
  <div class="year-view-container">
    {#each years as y, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="block year-name-block pointer"
        on:click={() => selectedYear(y)}
        class:reduced-padding={y === (currDate || new Date()).getFullYear()}
      >
        {#if (y === (currDate || new Date()).getFullYear())}
          <span class="current-year-indicator">
            {y}
          </span>
          {:else}
          {y}
          {/if}
      </div>
      {#if (i + 1) % 3 === 0}
        <br />
      {/if}
    {/each}
  </div>
</div>

<style>
  .year-calendar-wrapper {
    padding-bottom: 12px;
  }
  .year-view-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .year-name-block {
    width: calc(100% / 3);
    padding: 2.3em 1em;
    font-size: 0.8em;
  }
  .reduced-padding {
    padding: 1.7em 0.6em;
  }
  .year-indicator {
    outline: none;
    background-color: transparent;
    border: none;
    font-weight: 800;
    font-size: 1em;
    padding: 0.71em;
  }
  .current-year-indicator {
    background: #747bff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6em 0.4em;
  }
</style>