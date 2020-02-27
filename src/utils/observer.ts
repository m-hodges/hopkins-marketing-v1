const observer = (setState: Function, ref: string, setContentState?: Function) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            setState(entry.isIntersecting)
            if(setContentState) {
                if (entry.isIntersecting) {
                    setContentState(true)
                }
            }
        })
    })
    const target: Element | null = document.querySelector(`#${ref}`)
    if (target) {
        observer.observe(target)
        return () => observer.unobserve(target)
    }    
}

export default observer