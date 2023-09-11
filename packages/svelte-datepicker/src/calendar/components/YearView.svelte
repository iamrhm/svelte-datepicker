<script>
  import { months, isSameMonth, ViewType } from '../utils';
  import NextIcon from './Icons/NextIcon.svelte';
  import PrevIcon from './Icons/PrevIcon.svelte';

  /* passed props */
  export let currDate;
  export let className = '';
  export let onViewTypeChange = (view) => {};
  export let onDateChange = (date) => {};

  function selectMonth(monthNumber) {
    const selectedDate = new Date(showYear, monthNumber, 1);
    onDateChange(selectedDate);
    onViewTypeChange(ViewType.month);
  }
  function previousYear() {
    showYear = showYear - 1;
  }
  function nextYear() {
    showYear = showYear + 1;
  }

  /* reactive derived values */
  $:showYear = (currDate || new Date()).getFullYear();
</script>

<div class={className ? `year-calendar-wrapper ${className}` : 'year-calendar-wrapper'}>
  <!-- Monthly calendar header  -->
  <div class="calendar-header">
    <button class="action-button" on:click={previousYear}>
      <PrevIcon />
    </button>
    <button
      class="action-button year-indicator"
      on:click={() => onViewTypeChange(ViewType.decade)}
    >
      {showYear}
    </button>
    <button class="action-button" on:click={nextYear}>
      <NextIcon />
    </button>
  </div>
  <!-- Month container -->
  <div class="year-view-container">
    {#each months as month, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="block month-name-block pointer"
        on:click={() => selectMonth(i)}
        class:reduced-padding={isSameMonth(new Date(showYear, i, 1), new Date())}
      >
        {#if (isSameMonth(new Date(showYear, i, 1), new Date()))}
          <span class="current-month-indicator">
            {month}
          </span>
          {:else}
          {month}
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
  .month-name-block {
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
  .current-month-indicator {
    background: #747bff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6em 0.4em;
  }
</style>