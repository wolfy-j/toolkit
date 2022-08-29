<extends:toolkit:form.field/>

<block:element>
  <textarea
    inputID:consume
    id="${id}"
    data-input="true"
    class="form-control@if(injected('error')) is-invalid@endif@if(injected('success')) is-valid@endif"
    name="${name}"
    placeholder="${placeholder}"
    @if(injected('rows'))
      rows="${rows}"
    @endif
    @if(injected('cols'))
      cols="${cols}"
    @endif
    @if(injected('disabled'))
      disabled
    @endif
    @if(injected('autocomplete'))
      autocomplete="${autocomplete}"
    @endif
    @if(injected('autofocus'))
      autofocus
    @endif
    @if(injected('readonly'))
      readonly
    @endif
  >${value}${context}</textarea>
</block:element>
