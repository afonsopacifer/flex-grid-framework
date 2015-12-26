## Custom mixins for breakpoints

- [Stylus](#stylus)
- [Sass](#sass)

## Stylus
```css
@media (max-width 811px)
  .example-a
    mq-col(12)
    mq-offset(0)

  .example-b
    mq-col(12)
```

### Columns
- `mq-col(flex)`
- `mq-col(1)`
- `mq-col(2)`
- `mq-col(3)`
- `mq-col(4)`
- `mq-col(5)`
- `mq-col(6)`
- `mq-col(7)`
- `mq-col(8)`
- `mq-col(9)`
- `mq-col(10)`
- `mq-col(11)`
- `mq-col(12)`

### Offset
- `mq-offset(0)`
- `mq-offset(1)`
- `mq-offset(2)`
- `mq-offset(3)`
- `mq-offset(4)`
- `mq-offset(5)`
- `mq-offset(6)`
- `mq-offset(7)`
- `mq-offset(8)`
- `mq-offset(9)`
- `mq-offset(10)`
- `mq-offset(11)`

### justify
- `mq-justify(left)`
- `mq-justify(right)`
- `mq-justify(center)`
- `mq-justify(between)`
- `mq-justify(around)`

### vertical-align
- `mq-vertical-align(top)`
- `mq-vertical-align(middle)`
- `mq-vertical-align(bottom)`

## Sass
```css
@media (max-width: 811px) {
  .example-a {
    @include mq-col(12);
    @include mq-offset(0);
  }
  .example-b {
    @include mq-col(12);
  }
}
```

### Columns
- `@include mq-col(flex)`
- `@include mq-col(1)`
- `@include mq-col(2)`
- `@include mq-col(3)`
- `@include mq-col(4)`
- `@include mq-col(5)`
- `@include mq-col(6)`
- `@include mq-col(7)`
- `@include mq-col(8)`
- `@include mq-col(9)`
- `@include mq-col(10)`
- `@include mq-col(11)`
- `@include mq-col(12)`

### Offset
- `@include mq-offset(0)`
- `@include mq-offset(1)`
- `@include mq-offset(2)`
- `@include mq-offset(3)`
- `@include mq-offset(4)`
- `@include mq-offset(5)`
- `@include mq-offset(6)`
- `@include mq-offset(7)`
- `@include mq-offset(8)`
- `@include mq-offset(9)`
- `@include mq-offset(10)`
- `@include mq-offset(11)`

### justify
- `@include mq-justify(left)`
- `@include mq-justify(right)`
- `@include mq-justify(center)`
- `@include mq-justify(between)`
- `@include mq-justify(around)`

### vertical-align
- `@include mq-vertical-align(top)`
- `@include mq-vertical-align(middle)`
- `@include mq-vertical-align(bottom)`
