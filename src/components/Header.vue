<template>
  <div>
  <b-nav tabs>
    <b-nav-item disabled=""><b>Quiz App</b></b-nav-item>
    <b-nav-item disabled>{{numCorrect}}/{{numTotal}}</b-nav-item>
  </b-nav>
</div>
</template>

<script>
export default {
  props:[ // injuri hame mishe ferstad prob ro ba [] va ''
    'numCorrect',
    'numTotal'
  ]
}
</script>