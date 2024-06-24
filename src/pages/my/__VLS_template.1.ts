import {
  __VLS_internalComponent,
  __VLS_componentsOption,
  __VLS_name,
  memberStore,
  getData,
} from './my.vue'

function __VLS_template() {
  let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {}
  /* Components */
  let __VLS_otherComponents!: NonNullable<
    typeof __VLS_internalComponent extends { components: infer C } ? C : {}
  > &
    typeof __VLS_componentsOption
  let __VLS_own!: __VLS_SelfComponent<
    typeof __VLS_name,
    typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })
  >
  let __VLS_localComponents!: typeof __VLS_otherComponents &
    Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
  let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx
  /* Style Scoped */
  type __VLS_StyleScopedClasses = {}
  let __VLS_styleScopedClasses!:
    | __VLS_StyleScopedClasses
    | keyof __VLS_StyleScopedClasses
    | (keyof __VLS_StyleScopedClasses)[]
  /* CSS variable injection */
  /* CSS variable injection end */
  let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<
    'view',
    typeof __VLS_localComponents,
    'View',
    'view',
    'view'
  > &
    __VLS_WithComponent<'button', typeof __VLS_localComponents, 'Button', 'button', 'button'>
  __VLS_components.View
  __VLS_components.View
  __VLS_components.View
  __VLS_components.View
  __VLS_components.view
  __VLS_components.view
  __VLS_components.view
  __VLS_components.view
  // @ts-ignore
  ;[view, view, view, view]
  __VLS_components.Button
  __VLS_components.Button
  __VLS_components.Button
  __VLS_components.Button
  __VLS_components.Button
  __VLS_components.Button
  __VLS_components.button
  __VLS_components.button
  __VLS_components.button
  __VLS_components.button
  __VLS_components.button
  __VLS_components.button
  // @ts-ignore
  ;[button, button, button, button, button, button]
  {
    const __VLS_0 = (
      {} as 'View' extends keyof typeof __VLS_ctx
        ? { view: typeof __VLS_ctx.View }
        : 'view' extends keyof typeof __VLS_ctx
        ? { view: typeof __VLS_ctx.view }
        : typeof __VLS_resolvedLocalAndGlobalComponents
    ).view
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, class: 'my' }))
    ;(({}) as { view: typeof __VLS_0 }).view
    ;(({}) as { view: typeof __VLS_0 }).view
    const __VLS_2 = __VLS_1({ ...{}, class: 'my' }, ...__VLS_functionalComponentArgsRest(__VLS_1))
    ;(
      ({}) as (
        props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> &
          Record<string, unknown>,
      ) => void
    )({ ...{}, class: 'my' })
    const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!
    let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>
    {
      const __VLS_5 = (
        {} as 'View' extends keyof typeof __VLS_ctx
          ? { view: typeof __VLS_ctx.View }
          : 'view' extends keyof typeof __VLS_ctx
          ? { view: typeof __VLS_ctx.view }
          : typeof __VLS_resolvedLocalAndGlobalComponents
      ).view
      const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{} }))
      ;(({}) as { view: typeof __VLS_5 }).view
      ;(({}) as { view: typeof __VLS_5 }).view
      const __VLS_7 = __VLS_6({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_6))
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> &
            Record<string, unknown>,
        ) => void
      )({ ...{} })
      const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!
      let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>
      __VLS_ctx.memberStore.profile
      __VLS_8.slots!.default
    }
    {
      const __VLS_10 = (
        {} as 'Button' extends keyof typeof __VLS_ctx
          ? { button: typeof __VLS_ctx.Button }
          : 'button' extends keyof typeof __VLS_ctx
          ? { button: typeof __VLS_ctx.button }
          : typeof __VLS_resolvedLocalAndGlobalComponents
      ).button
      const __VLS_11 = __VLS_asFunctionalComponent(
        __VLS_10,
        new __VLS_10({ ...{ onTap: {} as any }, size: 'mini', plain: true, type: 'primary' }),
      )
      ;(({}) as { button: typeof __VLS_10 }).button
      ;(({}) as { button: typeof __VLS_10 }).button
      const __VLS_12 = __VLS_11(
        { ...{ onTap: {} as any }, size: 'mini', plain: true, type: 'primary' },
        ...__VLS_functionalComponentArgsRest(__VLS_11),
      )
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> &
            Record<string, unknown>,
        ) => void
      )({ ...{ onTap: {} as any }, size: 'mini', plain: true, type: 'primary' })
      const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!
      let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>
      let __VLS_15 = {
        tap: __VLS_pickEvent(
          __VLS_14['tap'],
          ({} as __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_12>).onTap,
        ),
      }
      __VLS_15 = {
        tap: ($event) => {
          __VLS_ctx.memberStore.setProfile({
            nickname: 'echidna',
            token: '12345',
          })
          // @ts-ignore
          ;[memberStore, memberStore]
        },
      }
      __VLS_13.slots!.default
    }
    {
      const __VLS_16 = (
        {} as 'Button' extends keyof typeof __VLS_ctx
          ? { button: typeof __VLS_ctx.Button }
          : 'button' extends keyof typeof __VLS_ctx
          ? { button: typeof __VLS_ctx.button }
          : typeof __VLS_resolvedLocalAndGlobalComponents
      ).button
      const __VLS_17 = __VLS_asFunctionalComponent(
        __VLS_16,
        new __VLS_16({ ...{ onTap: {} as any }, size: 'mini', plain: true, type: 'warn' }),
      )
      ;(({}) as { button: typeof __VLS_16 }).button
      ;(({}) as { button: typeof __VLS_16 }).button
      const __VLS_18 = __VLS_17(
        { ...{ onTap: {} as any }, size: 'mini', plain: true, type: 'warn' },
        ...__VLS_functionalComponentArgsRest(__VLS_17),
      )
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> &
            Record<string, unknown>,
        ) => void
      )({ ...{ onTap: {} as any }, size: 'mini', plain: true, type: 'warn' })
      const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!
      let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>
      let __VLS_21 = {
        tap: __VLS_pickEvent(
          __VLS_20['tap'],
          ({} as __VLS_FunctionalComponentProps<typeof __VLS_17, typeof __VLS_18>).onTap,
        ),
      }
      __VLS_21 = {
        tap: ($event) => {
          __VLS_ctx.memberStore.clearProfile()
          // @ts-ignore
          ;[memberStore]
        },
      }
      __VLS_19.slots!.default
    }
    {
      const __VLS_22 = (
        {} as 'Button' extends keyof typeof __VLS_ctx
          ? { button: typeof __VLS_ctx.Button }
          : 'button' extends keyof typeof __VLS_ctx
          ? { button: typeof __VLS_ctx.button }
          : typeof __VLS_resolvedLocalAndGlobalComponents
      ).button
      const __VLS_23 = __VLS_asFunctionalComponent(
        __VLS_22,
        new __VLS_22({ ...{ onTap: {} as any }, size: 'mini', plain: true, type: 'default' }),
      )
      ;(({}) as { button: typeof __VLS_22 }).button
      ;(({}) as { button: typeof __VLS_22 }).button
      const __VLS_24 = __VLS_23(
        { ...{ onTap: {} as any }, size: 'mini', plain: true, type: 'default' },
        ...__VLS_functionalComponentArgsRest(__VLS_23),
      )
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<typeof __VLS_22, typeof __VLS_24> &
            Record<string, unknown>,
        ) => void
      )({ ...{ onTap: {} as any }, size: 'mini', plain: true, type: 'default' })
      const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24)!
      let __VLS_26!: __VLS_NormalizeEmits<typeof __VLS_25.emit>
      let __VLS_27 = {
        tap: __VLS_pickEvent(
          __VLS_26['tap'],
          ({} as __VLS_FunctionalComponentProps<typeof __VLS_23, typeof __VLS_24>).onTap,
        ),
      }
      __VLS_27 = { tap: __VLS_ctx.getData }
      __VLS_25.slots!.default
    }
    __VLS_3.slots!.default
  }
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
  }
  var __VLS_slots!: {}
  // @ts-ignore
  ;[getData]
  return __VLS_slots
}
