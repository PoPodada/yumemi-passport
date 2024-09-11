import { test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByText('北海道').click()
  await page.getByRole('button', { name: '年少人口' }).click()
  await page.getByRole('button', { name: '生産年齢人口' }).click()
  await page.getByRole('button', { name: '老年人口' }).click()
  await page.getByRole('button', { name: '総人口' }).click()
  await page.getByText('青森県').click({
    button: 'right',
  })
  await page.getByLabel('青森県').check()
  await page.getByRole('button', { name: '年少人口' }).click()
  await page.getByRole('button', { name: '生産年齢人口' }).click()
  await page.getByRole('button', { name: '老年人口' }).click()
})
