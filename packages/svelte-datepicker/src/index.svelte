<script>
  import MonthView from "./calendar/components/MonthView.svelte";
  import YearView from "./calendar/components/YearView.svelte";
  import DecadeView from "./calendar/components/DecadeView.svelte";
  import { ViewType } from './calendar/utils';

  export let onChange = (d) => {};
  export let onViewChange = (v) => {};
  export let startDate = new Date();
  export let defaultView = ViewType.month;
  export let allowedViews = Object.keys(ViewType).map(k => ViewType[k]);
  export let rootClass = '';
  export let calendarWrapperClass = '';

  /* reactive derived values */
  $:calendarViewType = allowedViews.indexOf(defaultView) >= 0 ?  defaultView : ViewType.month;
  $:currDate = startDate;

  function onViewTypeChange(type = ViewType.month) {
    if (allowedViews.indexOf(type) >= 0) {
      calendarViewType = type;
      onViewChange(calendarViewType);
    }
  }
  function onDateChange(newDate) {
    currDate = newDate;
    onChange(newDate);
  }
</script>


<div class={rootClass ? `calendar-wrapper ${rootClass}` : 'calendar-wrapper'}>
  {#if (calendarViewType === ViewType.month)}
    <MonthView
      currDate={currDate}
      className={calendarWrapperClass}
      onViewTypeChange={onViewTypeChange}
      onDateChange={onDateChange}
    />
    {:else if (calendarViewType === ViewType.year)}
      <YearView
        currDate={currDate}
        className={calendarWrapperClass}
        onViewTypeChange={onViewTypeChange}
        onDateChange={onDateChange}
      />
    {:else if (calendarViewType === ViewType.decade)}
      <DecadeView
        currDate={currDate}
        className={calendarWrapperClass}
        onViewTypeChange={onViewTypeChange}
        onDateChange={onDateChange}
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
    fill: inherit;
  }
  :global(.pointer) {
    cursor: pointer;
  }
</style>