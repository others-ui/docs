const t=`<style>
  ot-select {
    width: 200px;
  }
</style>

<div>
  <ot-space>
    <div><ot-switch /></div>
    <div>
      <ot-button type="primary">切换</ot-button>
    </div>
  </ot-space>
</div>

<script>
  const OtSwitch = document.querySelector('ot-switch')
  const OtButton = document.querySelector('ot-button')

  OtButton.addEventListener('click', () => {
    OtSwitch.value = !OtSwitch.value
  })
<\/script>

`;export{t as default};
