
function Permutation (data) {
    this.arr = []
    this.permutations = []
    this.allPermutations = []
    this.indices = []
    this.countAll = 0
    this.nbElemToPermute = 1
    this.totalPermutation = 0
    
    this.processed = {}
    
    this.arr = data
    this.countAll = data.length
    
    this.getAllPermutations = function (nbElemToPermute) 
    {
        this.allPermutations = []
        this.indices = []
        this.nbElemToPermute = typeof nbElemToPermute === 'undefined' 
            ? this.countAll 
            : nbElemToPermute
        
        this._permute(0)

        return this.allPermutations
    }
    
    this._permute = function (level) 
    {
        for (let i = 0; i < this.countAll; i++) {
            if (typeof this.indices[i] === 'undefined' || !this.indices[i]) {
                this.indices[i] = true
                this.permutations[level] = this.arr[i]

                if (level < this.nbElemToPermute - 1) {
                    this._permute(level + 1)
                } else {
                    this.allPermutations.push([].concat(this.permutations))
                    this.totalPermutation += 1
                }

                this.indices[i] = false
            }
        }
    }
}

let p = new Permutation([1,2,3])
print(p.getAllPermutations())


// class Permutation
// {
//   arr = []
//   countAll = 0
//   savedPermutations = {}
//   saveResult = true

//   allPermutations = []
//   totalPermutation = 0

//   constructor(data, saveResult = true)
//   {
//     this.arr = data
//     this.countAll = data.length
//     this.saveResult = saveResult
//   }

//   getTotalPermutations()
//   {
//     return this.totalPermutation
//   }

//   getAllPermutations(start = 0, nbElemToPermute = -1)
//   {
//     if (!Number.isInteger(start))
//       throw Error("")
//     if (!Number.isInteger(nbElemToPermute))
//       throw Error("")

//     this.allPermutations = []
//     let indices = []
//     let permutation = []
//     start = start < 0
//       ? 0 : start
//     nbElemToPermute = nbElemToPermute < 1
//       ? this.countAll : nbElemToPermute
//     let _ = `0/${start}/${nbElemToPermute}`

//     let perm = []

//     if (this.savedPermutations.hasOwnProperty(_)) {
//       let res = this.savedPermutations[_]
//       perm = res["res"]
//       this.allPermutations = perm
//       this.totalPermutation = res["total"]
//     } else {
//       this._permute(start, indices, permutation, nbElemToPermute)
//       perm = this.allPermutations
//       let total = perm.length
//       this.totalPermutation = total

//       if (this.saveResult)
//         this.savedPermutations[_] = {res : perm, total}
//     }

//     return [...perm]
//   }
//   getAllPermutationsRepeatition(start = 1)
//   {

//   }

//   _permute(level, indices, permutation, nbElemToPermute)
//   {
//     let c = this.countAll

//     for(let i = 0; i < c; i++) {
//       if (typeof indices[i] === 'undefined' || !indices[i]) {
//         indices[i] = true
//         permutation[level] = this.arr[i]

//         if (level < nbElemToPermute - 1) {
//           this._permute(level + 1, indices, permutation, nbElemToPermute)
//         } else this.allPermutations.push([...permutation])

//         indices[i] = false
//       }
//     }
//   }
//   _permuteRepeat(level, permutation)
//   {

//   }
// }

// // let p = new Permutation([1,2,3])
// // console.log(p.getAllPermutations())
// // console.log(p.getAllPermutations())
// // console.log(p.getTotalPermutations())
// // // console.log(p)







