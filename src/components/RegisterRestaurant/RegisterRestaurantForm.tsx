import React from "react";

interface Props {}

export const RegisterRestaurantForm: React.FC<Props> = ({}) => {
  return (
    <form className="register-restaurant-form">
      <section className="register-restaurant-input-container">
        <p>餐廳名稱</p>
        <RestaurantInputIcon />
        <input
          type="text"
          className="register-restaurant-input"
          placeholder="餐廳名稱"
        />
      </section>
      <section className="register-restaurant-input-container">
        <p>餐廳地址</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
        <input
          type="text"
          className="register-restaurant-input"
          placeholder="餐廳地址"
        />
      </section>
      <section className="register-restaurant-input-container">
        <p>餐廳電話</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          />
        </svg>
        <input
          type="text"
          className="register-restaurant-input"
          placeholder="餐廳電話"
        />
      </section>
      <section className="register-restaurant-textarea-container">
        <p>餐廳介紹</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
        </svg>
        <textarea
          name=""
          className="register-restaurant-textarea"
          placeholder="寫下餐廳的介紹"
        ></textarea>
      </section>
    </form>
  );
};

const RestaurantInputIcon = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M7.008 22.914c-4.134-1.896-7.008-6.072-7.008-10.914 0-6.623 5.377-12 12-12s12 5.377 12 12c0 4.439-2.415 8.318-6.002 10.394.002-5.398.004-12.809-.002-13.685-.003-.412-.3-.709-.673-.709-1.297 0-3.215 5.17-3.883 11 1.079-.003 2.056 0 2.056 0v4.482c-1.107.337-2.28.518-3.496.518-.852 0-1.683-.089-2.484-.258v-6.096c0-.585.36-.765 1.151-1.391.594-.47 1.016-1.212.935-1.963-.231-2.121-.793-6.292-.793-6.292h-.458v5h-.835l-.166-5h-.469l-.201 5h-.836l-.144-5h-.506l-.186 5h-.836v-5h-.5s-.509 4.198-.718 6.312c-.074.741.326 1.469.907 1.935.787.63 1.147.819 1.147 1.395v5.272z" />
  </svg>
);
