export const NameList = () => {
    const names = ['yashi', 'sashi', 'fashi']

    return (
        <div>
            {
                names.map((name) => {
                    return <h2 key={name}>{name}</h2>
                })
            }
        </div>
    )
}