function Key(props) {
    return (
      	<button className={`btn btn-${props.color} w-100 h-100`}>{props.op}</button>
    );
}

function Keyboard(props) {
  return (
    <tr>
      <td>
        <Key color="secondary" op="0" />
      </td>
      <td>
        <Key color="secondary" op="." />
      </td>
    </tr>
  );
};

