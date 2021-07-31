userler=[]


def qeydiyat():
            ad=input('Ad : ')
            soyad=input('Soyad : ')
            email=input('email :')
            login=input('login :')
            password=input('password :')
            user={
            'login':login,
            'password':password,
            'Ad':ad,
            'Soyad':soyad,
            'email':email
        }
            userler.append(user)

def loginn():
    a=input("LOGIN: ")
    b=input("PASSWORD: ")
    for user in userler:
        if user["login"]==a and user["password"]==b:
             print(user["ad"],user["Soyad"],user["email"])
        else:
            print("LOADING... Eger netice cixmadisa 1 duymesine basib qeydiyatdan kecin)")

        


while True:
            emr=input("""1- Qeydiyyatdan keçmək üçün 1 daxil edin
             2- Sistemə daxil olmaq üçün 2 daxil edin:  """)
            if(emr=="1" or emr=="q"):
                qeydiyat()
            elif(emr=="2"):
                loginn()
