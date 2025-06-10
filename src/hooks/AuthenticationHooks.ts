import {useDispatch} from "react-redux";
import {useMutation} from "@tanstack/react-query";
import {LoginApi, RegisterApi} from "../api/AuthenticationApi.ts";
import type {LoginDto, RegisterDto, RegisterRespont} from "../modole/request/AuthenDTO.ts";
import type {User} from "../modole/entity/User.ts";
import type {ExceptionResponse} from "../modole/respont/AuthenticationRespont.ts";
import {setUser} from "../store/userSlice.ts.ts";


export const useLogin = () => {
    const dispatch = useDispatch();
    return useMutation({
        mutationFn: async ({email, password}: LoginDto): Promise<User | ExceptionResponse> => await LoginApi({
            email,
            password
        }),
        onSuccess: (data: User | ExceptionResponse) => {
            if ("accessToken" in data) {
                dispatch(setUser(data));
                console.log(data);
            } else {
                console.log(data)
            }
        },

        onError: () => {
            console.log("Lỗi kết nối máy chủ hoặc sai định dạng dữ liệu");
        },
    });
};

export const useRegister = () => {
    return useMutation({
        mutationFn:
            async ({email, password}: RegisterDto):
                Promise<RegisterRespont | ExceptionResponse> => await RegisterApi({
                email,
                password
            }),
        onSuccess: () => {
            console.log("register success");
        },
        onError: () => {
            console.log("register error");
        }

    })
}