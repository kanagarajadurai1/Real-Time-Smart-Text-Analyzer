const text = document.getElementById("text")

const charCount = document.getElementById("charCount")
const remaining = document.getElementById("remaining")
const wordCount = document.getElementById("wordCount")
const sentenceCount = document.getElementById("sentenceCount")

const progressBar = document.getElementById("progressBar")
const warning = document.getElementById("warning")

const copyBtn = document.getElementById("copy")
const clearBtn = document.getElementById("clear")

const maxChars = 200

text.addEventListener("input", function(){

let value = text.value

let length = value.length

if(length > maxChars){
text.value = value.substring(0,maxChars)
length = maxChars
}

charCount.innerText = length
remaining.innerText = maxChars - length

let words = value.trim().split(/\s+/).filter(word => word.length>0)

wordCount.innerText = words.length

let sentences = value.split(/[.!?]+/).filter(s=>s.trim().length>0)

sentenceCount.innerText = sentences.length

let percent = (length/maxChars)*100
progressBar.style.width = percent + "%"

if(length > 150){
warning.innerText = "⚠ You are near the character limit"
}else{
warning.innerText = ""
}

})

copyBtn.addEventListener("click",function(){

navigator.clipboard.writeText(text.value)

alert("Text copied!")
})

clearBtn.addEventListener("click",function(){

text.value = ""

charCount.innerText = 0
remaining.innerText = maxChars
wordCount.innerText = 0
sentenceCount.innerText = 0

progressBar.style.width = "0%"

warning.innerText = ""

})