const sortTags = (arr) => {
    return arr.reduce((acc,item) => {
        if(!acc.includes(item)) {
            acc.push(item)
        }
        return acc
    },['все растения'])
}

export default sortTags