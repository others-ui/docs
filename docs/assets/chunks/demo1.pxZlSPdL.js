const o=`<div>
  <ot-space direction="vertical">
    <ot-checkbox-group>
      <ot-space>
        <ot-checkbox value="1">做运动</ot-checkbox>
        <ot-checkbox value="2">看书</ot-checkbox>
        <ot-checkbox value="3">吃饭</ot-checkbox>
        <ot-checkbox value="4">睡觉</ot-checkbox>
      </ot-space>
    </ot-checkbox-group>
    <ot-button type="success">
      重置
    </ot-button>
  </ot-space>
</div>

<script>
  const group = document.querySelector('ot-checkbox-group')
  const button =  document.querySelector('ot-button')

  group.addEventListener('change', (e) => {
    groupValue.value = [...e.detail]
    console.log('groupValue change', e)
  })

  button.addEventListener('click', () => {
    group.value = []
  })

<\/script>
`;export{o as default};
