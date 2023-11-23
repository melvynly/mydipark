export default (() => {
  const __VLS_setup = async () => {
    const __VLS_publicComponent = (await import('vue')).defineComponent({
      setup() {
        return {}
      }
    })

    const __VLS_componentsOption = {}

    let __VLS_name!: 'Dice'
    function __VLS_template() {
      let __VLS_ctx!: InstanceType<
        import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>
      > &
        InstanceType<
          import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>
        > & {}
      /* Components */
      let __VLS_localComponents!: NonNullable<
        typeof __VLS_internalComponent extends { components: infer C } ? C : {}
      > &
        typeof __VLS_componentsOption &
        typeof __VLS_ctx
      let __VLS_otherComponents!: typeof __VLS_localComponents &
        import('./__VLS_types.js').GlobalComponents
      let __VLS_own!: import('./__VLS_types.js').SelfComponent<
        typeof __VLS_name,
        typeof __VLS_internalComponent &
          typeof __VLS_publicComponent &
          (new () => { $slots: typeof __VLS_slots })
      >
      let __VLS_components!: typeof __VLS_otherComponents &
        Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
      /* Style Scoped */
      type __VLS_StyleScopedClasses = {}
      let __VLS_styleScopedClasses!:
        | __VLS_StyleScopedClasses
        | keyof __VLS_StyleScopedClasses
        | (keyof __VLS_StyleScopedClasses)[]
      /* CSS variable injection */
      /* CSS variable injection end */
      let __VLS_templateComponents!: {}
      {
        ;(({}) as JSX.IntrinsicElements).h1
        ;(({}) as JSX.IntrinsicElements).h1
        ;(__VLS_x as JSX.IntrinsicElements)['h1'] = {}
      }
      {
        ;(({}) as JSX.IntrinsicElements).section
        ;(({}) as JSX.IntrinsicElements).section
        ;(__VLS_x as JSX.IntrinsicElements)['section'] = { class: 'container' }
        {
          ;(({}) as JSX.IntrinsicElements).div
          ;(({}) as JSX.IntrinsicElements).div
          ;(__VLS_x as JSX.IntrinsicElements)['div'] = { id: 'cube' }
          {
            ;(({}) as JSX.IntrinsicElements).div
            ;(({}) as JSX.IntrinsicElements).div
            ;(__VLS_x as JSX.IntrinsicElements)['div'] = { class: 'front' }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot1' }
            }
          }
          {
            ;(({}) as JSX.IntrinsicElements).div
            ;(({}) as JSX.IntrinsicElements).div
            ;(__VLS_x as JSX.IntrinsicElements)['div'] = { class: 'back' }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot1' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot2' }
            }
          }
          {
            ;(({}) as JSX.IntrinsicElements).div
            ;(({}) as JSX.IntrinsicElements).div
            ;(__VLS_x as JSX.IntrinsicElements)['div'] = { class: 'right' }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot1' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot2' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot3' }
            }
          }
          {
            ;(({}) as JSX.IntrinsicElements).div
            ;(({}) as JSX.IntrinsicElements).div
            ;(__VLS_x as JSX.IntrinsicElements)['div'] = { class: 'left' }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot1' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot2' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot3' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot4' }
            }
          }
          {
            ;(({}) as JSX.IntrinsicElements).div
            ;(({}) as JSX.IntrinsicElements).div
            ;(__VLS_x as JSX.IntrinsicElements)['div'] = { class: 'top' }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot1' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot2' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot3' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot4' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot5' }
            }
          }
          {
            ;(({}) as JSX.IntrinsicElements).div
            ;(({}) as JSX.IntrinsicElements).div
            ;(__VLS_x as JSX.IntrinsicElements)['div'] = { class: 'bottom' }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot1' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot2' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot3' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot4' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot5' }
            }
            {
              ;(({}) as JSX.IntrinsicElements).span
              ;(({}) as JSX.IntrinsicElements).span
              ;(__VLS_x as JSX.IntrinsicElements)['span'] = { class: 'dot dot6' }
            }
          }
        }
      }
      if (
        typeof __VLS_styleScopedClasses === 'object' &&
        !Array.isArray(__VLS_styleScopedClasses)
      ) {
      }
      declare var __VLS_slots: {}
      return __VLS_slots
    }
    const __VLS_internalComponent = (await import('vue')).defineComponent({
      setup() {
        return {}
      }
    })
    return {} as typeof __VLS_publicComponent
  }
  return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never
})({} as any)
