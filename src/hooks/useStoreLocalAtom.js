import { useLocalStorageState, useMount, useUpdateEffect } from 'ahooks'
import { useRecoilState } from 'recoil'

export const useStoreLocalAtom = (key, atom) => {
  const [atomState, setAtomState] = useRecoilState(atom)
  const [localState, setLocalState] = useLocalStorageState(key)

  useMount(() => {
    if (localState) {
      setAtomState(localState)
    }
  })

  useUpdateEffect(() => {
    setLocalState(atomState)
  }, [atomState])
}
