const supabaseUrl = 'https//zsyjqwlefzaikxnpetgwk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzeWpxd2xmemFpa3hucGV0Z3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MjcxMzEsImV4cCI6MjA3MjQwMzEzMX0.SOTRyokYnaUB2ACJeLuZwPXqUgEPyXa-v2AToltiNhw';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");


signupBtn.addEventListener("click", async () => {
    const { data, error } = await supabase.auth.signUp({
        email: emailInput.value,
        password: passwordInput.value,
    })

    if (error) {
        alert(error.message)
    }

    console.log(data)
})


loginBtn.addEventListener("click", async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput.value,
        password: passwordInput.value,
    })

    if (error) {
        alert(error.message)
    }

    console.log(data)
});




(async () => {
    const data = await supabase.auth.getSession()
    const user = await supabase.auth.getUser()

    console.log(user)

    console.log("session data", data)
})()





const getBtn = document.getElementById("get-btn")
const updateBtn = document.getElementById("update-btn")
const addBtn = document.getElementById("add-btn")
const titleInput = document.getElementById("title")
const contentInput = document.getElementById("content")


getBtn.addEventListener("click", async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser()


    if (userError) {
        alert(userError.message)
    }

    const { data, error } = await supabase.from("notes").select("*").eq("user_id", user.id)

    if (error) {
        alert(error.message)
        return
    }

    console.log(data)
});

updateBtn.addEventListener("click", async () => {
    const { error } = await supabase.from("notes").update({ title: "Note 2" }).eq("id", 2)

    if (error) {
        alert(error.message)
    }
})

addBtn.addEventListener("click", async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser()


    if (userError) {
        alert(userError.message)
    }

    const { error } = await supabase.from("notes").insert({ title: titleInput.value, content: contentInput.value, user_id: user.id })

    if (error) {
        alert(error.message)
    }

})
