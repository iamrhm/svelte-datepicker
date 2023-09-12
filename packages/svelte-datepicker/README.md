# svelte-datepicker

This repository hosts a customizable and responsive datepicker component built using the Svelte. Whether you're building a personal productivity app, a scheduling application, or just need a sleek and efficient datepicker UI, this project has you covered.

## Features

- **Flexible Customization**: Tailor the datepicker to your design needs with customizable themes, color schemes, and event markers.
- **Responsive Design**: The datepicker seamlessly adapts to various screen sizes, ensuring a consistent experience across devices.
- **Event Integration**: Easily integrate events, appointments, and important dates into the datepicker for a comprehensive scheduling solution.
- **Smooth Animations**: Enjoy smooth and engaging animations for seamless navigation and interaction with the datepicker.
- **User-friendly Interface**: The intuitive interface makes it easy for users to navigate, select dates, and manage their schedules.

## Getting Started

To start using the `svelte-datepicker` in your project, follow these simple steps:

1. Clone or download this repository.
2. Integrate the datepicker component into your Svelte application using the provided examples.

## Usage

Here's an example of how you can integrate the svelte-datepicker component into your Svelte application:

```svelte
<script>
  import Calendar from 'svelte-datepicker';
</script>

<Calendar />
```

## User guide

### Calendar

Displays a complete, interactive datepicker.

#### Props

| Prop name | Description | Example values |
| --- | --- | --- |
| `onChange` | Function called when the user clicks an item (day on month view, month on year view and so on) on the most detailed view available. | `(date) => {}` |
| `onViewChange` | Function called when the user navigates from one view to another using prev/next up button or by clicking a tile. `viewTypes` are `month`, `year` & `decade` | `(viewType) => {}` |
| `startDate` | The beginning of a period that shall be displayed by default. | `new Date(2017, 0, 1)` |
| `rootClass` | Class name that will be applied to a given datepicker wrapper | String: `"class1 class2"` |
| `calendarWrapperClass` | Class name that will be applied to different view type of datepicker wrapper,  | String: `"class1 class2"` |
| `defaultView` | Determines which datepicker view shall be opened initially. Does not disable navigation. Can be `"month"`, `"year"`, `"decade"`, it's optional. | `"month"` |
| `allowedViews` | Will be an array of views that should be displayed while user navigates the datepicker/datepicker, it's optional | initial value: `["month", "year", "decade"]` |
