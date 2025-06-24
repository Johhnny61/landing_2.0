import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import sendTelegramOrder from "../utils/telegram";

const FormSection = styled.section`
  padding: 0px 0 40px 0;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Title = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  font-size: 1rem;
  min-height: 80px;
`;

const SubmitBtn = styled.button`
  background: #000;
  color: #fff;
  border-radius: 8px;
  padding: 14px 0;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  margin-top: 8px;
  transition: background 0.2s;
  &:hover {
    background: #1D1D1D;
  }
`;

const SuccessMsg = styled(motion.div)`
  background: #e6ffe6;
  color: #1a7f37;
  border-radius: 8px;
  padding: 18px 12px;
  margin-top: 18px;
  text-align: center;
  font-weight: 500;
`;

const initialState = { name: "", phone: "", details: "" };

const OrderForm = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Пожалуйста, заполните обязательные поля.");
      return;
    }
    setLoading(true);
    try {
      await sendTelegramOrder(form);
      setForm(initialState);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Ошибка отправки. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormSection id="order">
      <Container>
        <Title>Оставить заявку</Title>
        <StyledForm onSubmit={handleSubmit} as={motion.form} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Input name="name" placeholder="Имя" value={form.name} onChange={handleChange} required />
          <Input name="phone" placeholder="Телефон" value={form.phone} onChange={handleChange} required />
          <Input name="details" placeholder="Детали заказа (необязательно)" value={form.details} onChange={handleChange} />
          <SubmitBtn type="submit" disabled={loading}>{loading ? 'Отправка...' : 'Отправить заявку'}</SubmitBtn>
        </StyledForm>
        {success && (
          <SuccessMsg initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Спасибо! Мы свяжемся с вами в течение 1 рабочего дня
          </SuccessMsg>
        )}
        {error && <div className="text-red-600 text-center">{error}</div>}
      </Container>
    </FormSection>
  );
};

export default OrderForm; 