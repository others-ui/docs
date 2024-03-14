const e=`<div id="box">
  <div id="show"></div>
</div>

<script>
  const select = document.createElement('ot-select')
  select.options = [
      {
        label: "第一个",
        value: "1"
      },
      {
        label: '第二个',
        value: "2"
      },
      {
        label: '第三个',
        value: "3"
      },
      {
        label: '第四个',
        value: "4"
      },
      {
        label: '第五个',
        value: "5"
      }
    ]
    select.filter = (val, list) => list.filter(item => item.label.startsWith(val))
    select.addEventListener('change', (e) => {
      document.querySelector('#show').innerHTML = e.detail
    })

    document.querySelector('#box').appendChild(select)
<\/script>
`;export{e as default};
